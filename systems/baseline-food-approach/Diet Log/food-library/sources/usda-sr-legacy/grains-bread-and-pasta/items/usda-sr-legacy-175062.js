/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175062",
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
    },
    {
      "gramsPerUnit": 60.0,
      "key": "doughnut-medium-3-1-4-dia",
      "kind": "unit",
      "label": "doughnut, medium (3-1/4\" dia)"
    }
  ],
  "name": "Doughnuts, yeast-leavened, glazed, unenriched (includes honey buns)",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 44.3,
    "energy_kcal": 1690.0,
    "fat_g": 22.8,
    "fibre_g": 1.2,
    "folate_ug": 22.0,
    "iron_mg": 0.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 93.0,
    "potassium_mg": 108.0,
    "protein_g": 6.4,
    "salt_g": 0.855,
    "sat_fat_g": 5.81,
    "sodium_mg": 342.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175062",
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
