/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Nuts, acorn flour, full fat",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 54.6,
    "energy_kcal": 2100.0,
    "fat_g": 30.2,
    "fibre_g": 0.0,
    "folate_ug": 114.0,
    "iron_mg": 1.21,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 712.0,
    "protein_g": 7.49,
    "salt_g": 0.0,
    "sat_fat_g": 3.92,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170566",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "grains-bread-and-pasta",
    "nut-and-seed-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
