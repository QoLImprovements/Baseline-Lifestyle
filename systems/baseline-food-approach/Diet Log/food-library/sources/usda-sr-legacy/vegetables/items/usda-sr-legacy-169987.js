/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    }
  ],
  "name": "Celeriac, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 5.9,
    "energy_kcal": 113.0,
    "fat_g": 0.19,
    "fibre_g": 1.2,
    "folate_ug": 3.0,
    "iron_mg": 0.43,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 173.0,
    "protein_g": 0.96,
    "salt_g": 0.1525,
    "sat_fat_g": 0.0,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169987",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
