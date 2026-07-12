/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "10-goldfish",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.3,
      "key": "10-goldfish",
      "kind": "unit",
      "label": "10 goldfish"
    }
  ],
  "name": "Pepperidge Farm, Goldfish, Baked Snack Crackers, Explosive Pizza",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 67.2,
    "energy_kcal": 458.0,
    "fat_g": 16.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.43,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 296.0,
    "protein_g": 9.56,
    "salt_g": 2.17,
    "sat_fat_g": 0.0,
    "sodium_mg": 868.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168006",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
