/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (General Foods)",
  "id": "cofid-old-11-135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, Grapenuts",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 79.9,
    "energy_kcal": 346.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 350.0,
    "iron_mg": 9.5,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 310.0,
    "protein_g": 10.5,
    "salt_g": 1.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 590.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 1320.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-135",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
