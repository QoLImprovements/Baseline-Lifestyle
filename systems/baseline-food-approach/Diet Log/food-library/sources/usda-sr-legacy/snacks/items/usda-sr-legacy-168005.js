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
  "id": "usda-sr-legacy-168005",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.2,
      "key": "10-goldfish",
      "kind": "unit",
      "label": "10 goldfish"
    }
  ],
  "name": "Pepperidge Farm, Goldfish, Baked Snack Crackers, Cheddar",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 66.2,
    "energy_kcal": 1910.0,
    "fat_g": 16.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.26,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 199.0,
    "protein_g": 11.7,
    "salt_g": 2.185,
    "sat_fat_g": 0.0,
    "sodium_mg": 874.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168005",
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
