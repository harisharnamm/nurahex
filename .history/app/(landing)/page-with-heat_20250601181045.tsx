import HeatQuadrant from "@/components/shared/heat-quadrant";

export default function PageWithHeat() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our <span className="text-primary-700">HEAT</span> Framework
      </h2>
      
      <HeatQuadrant 
        topLeftContent={
          <div>
            <h3 className="text-xl font-bold mb-2">Holistic</h3>
            <p className="text-surface-50/80">Comprehensive AI solutions that address all aspects of your business needs</p>
          </div>
        }
        topRightContent={
          <div>
            <h3 className="text-xl font-bold mb-2">Effective</h3>
            <p className="text-surface-50/80">Solutions that deliver measurable results and real business impact</p>
          </div>
        }
        bottomLeftContent={
          <div>
            <h3 className="text-xl font-bold mb-2">Adaptable</h3>
            <p className="text-surface-50/80">Flexible systems that grow and evolve with your business needs</p>
          </div>
        }
        bottomRightContent={
          <div>
            <h3 className="text-xl font-bold mb-2">Transformative</h3>
            <p className="text-surface-50/80">Revolutionary approaches that fundamentally improve operations</p>
          </div>
        }
      />
    </div>
  );
}
