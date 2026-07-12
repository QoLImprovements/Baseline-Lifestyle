/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168413",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Escarole, cooked, boiled, drained, no salt added",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 3.07,
    "energy_kcal": 15.0,
    "fat_g": 0.18,
    "fibre_g": 2.8,
    "folate_ug": 78.0,
    "iron_mg": 0.72,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 245.0,
    "protein_g": 1.15,
    "salt_g": 0.0475,
    "sat_fat_g": 0.042,
    "sodium_mg": 19.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 212.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168413",
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
