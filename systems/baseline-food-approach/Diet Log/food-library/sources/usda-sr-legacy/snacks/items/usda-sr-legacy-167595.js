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
  "id": "usda-sr-legacy-167595",
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
  "name": "Pepperidge Farm, Goldfish, Baked Snack Crackers, Parmesan",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 64.7,
    "energy_kcal": 459.0,
    "fat_g": 17.3,
    "fibre_g": 3.5,
    "folate_ug": 0.0,
    "iron_mg": 4.45,
    "magnesium_mg": 24.0,
    "omega3_g": 0.365,
    "phosphorus_mg": 204.0,
    "potassium_mg": 168.0,
    "protein_g": 11.2,
    "salt_g": 2.975,
    "sat_fat_g": 2.61,
    "sodium_mg": 1190.0,
    "sugar_g": 0.83,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167595",
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
