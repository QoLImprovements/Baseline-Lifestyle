/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tortilla-medium-approx-6-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "tortilla-medium-approx-6-dia",
      "kind": "unit",
      "label": "tortilla, medium (approx 6\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Tortillas, ready-to-bake or -fry, corn, without added salt",
  "nutritionPerBasis": {
    "calcium_mg": 175.0,
    "carbs_g": 46.6,
    "energy_kcal": 929.0,
    "fat_g": 2.5,
    "fibre_g": 5.2,
    "folate_ug": 114.0,
    "iron_mg": 1.4,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 314.0,
    "potassium_mg": 154.0,
    "protein_g": 5.7,
    "salt_g": 0.0275,
    "sat_fat_g": 0.334,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173241",
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
