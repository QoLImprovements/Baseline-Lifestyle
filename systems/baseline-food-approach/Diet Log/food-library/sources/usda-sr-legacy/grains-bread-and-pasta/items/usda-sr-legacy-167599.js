/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Udi's, Gluten Free, Soft & Hearty Whole Grain Bread",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 49.1,
    "energy_kcal": 309.0,
    "fat_g": 9.34,
    "fibre_g": 4.9,
    "folate_ug": 0.0,
    "iron_mg": 0.76,
    "magnesium_mg": 31.0,
    "omega3_g": 0.801,
    "phosphorus_mg": 77.0,
    "potassium_mg": 123.0,
    "protein_g": 7.25,
    "salt_g": 1.275,
    "sat_fat_g": 0.266,
    "sodium_mg": 510.0,
    "sugar_g": 9.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167599",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
