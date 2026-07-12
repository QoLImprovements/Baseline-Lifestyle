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
  "id": "usda-sr-legacy-167594",
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
  "name": "Pepperidge Farm, Goldfish, Baked Snack Crackers, Original",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 65.8,
    "energy_kcal": 1950.0,
    "fat_g": 18.4,
    "fibre_g": 2.4,
    "folate_ug": 153.0,
    "iron_mg": 4.73,
    "magnesium_mg": 23.0,
    "omega3_g": 0.418,
    "phosphorus_mg": 156.0,
    "potassium_mg": 169.0,
    "protein_g": 9.42,
    "salt_g": 2.3675,
    "sat_fat_g": 1.43,
    "sodium_mg": 947.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.68,
    "vitamin_k_ug": 27.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167594",
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
