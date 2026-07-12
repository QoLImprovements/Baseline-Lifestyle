/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Rolls, gluten-free, whole grain, made with tapioca starch and brown rice flour",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 44.3,
    "energy_kcal": 329.0,
    "fat_g": 11.6,
    "fibre_g": 11.2,
    "folate_ug": 0.0,
    "iron_mg": 1.64,
    "magnesium_mg": 96.0,
    "omega3_g": 1.75,
    "phosphorus_mg": 233.0,
    "potassium_mg": 273.0,
    "protein_g": 11.8,
    "salt_g": 1.2675,
    "sat_fat_g": 1.38,
    "sodium_mg": 507.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171864",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
