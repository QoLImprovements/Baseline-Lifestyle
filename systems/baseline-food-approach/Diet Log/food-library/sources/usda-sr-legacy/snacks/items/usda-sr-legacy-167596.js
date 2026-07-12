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
  "id": "usda-sr-legacy-167596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.1,
      "key": "10-goldfish",
      "kind": "unit",
      "label": "10 goldfish"
    }
  ],
  "name": "Pepperidge Farm, Goldfish, Baked Snack Crackers, Pizza",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 65.1,
    "energy_kcal": 1960.0,
    "fat_g": 18.9,
    "fibre_g": 3.5,
    "folate_ug": 0.0,
    "iron_mg": 4.87,
    "magnesium_mg": 28.0,
    "omega3_g": 0.446,
    "phosphorus_mg": 173.0,
    "potassium_mg": 326.0,
    "protein_g": 9.67,
    "salt_g": 2.0375,
    "sat_fat_g": 2.14,
    "sodium_mg": 815.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167596",
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
