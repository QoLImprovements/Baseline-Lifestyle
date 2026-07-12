/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "bun",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "bun",
      "kind": "unit",
      "label": "bun"
    }
  ],
  "name": "Cinnamon buns, frosted (includes honey buns)",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 48.6,
    "energy_kcal": 452.0,
    "fat_g": 26.6,
    "fibre_g": 1.2,
    "folate_ug": 72.0,
    "iron_mg": 1.37,
    "magnesium_mg": 14.0,
    "omega3_g": 0.227,
    "phosphorus_mg": 131.0,
    "potassium_mg": 102.0,
    "protein_g": 4.45,
    "salt_g": 0.7625,
    "sat_fat_g": 12.6,
    "sodium_mg": 305.0,
    "sugar_g": 25.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167940",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
