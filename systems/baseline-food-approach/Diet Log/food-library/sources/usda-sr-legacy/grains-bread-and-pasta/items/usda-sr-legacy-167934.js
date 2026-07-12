/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "16-crackers-wheat-thins",
      "kind": "unit",
      "label": "16 crackers, Wheat Thins"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Crackers, wheat, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 71.5,
    "energy_kcal": 444.0,
    "fat_g": 13.4,
    "fibre_g": 3.4,
    "folate_ug": 127.0,
    "iron_mg": 5.02,
    "magnesium_mg": 47.0,
    "omega3_g": 0.856,
    "phosphorus_mg": 258.0,
    "potassium_mg": 210.0,
    "protein_g": 9.34,
    "salt_g": 1.94,
    "sat_fat_g": 2.11,
    "sodium_mg": 776.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 24.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167934",
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
