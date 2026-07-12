/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Tomatoes, sun-dried, packed in oil, drained",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 23.3,
    "energy_kcal": 891.0,
    "fat_g": 14.1,
    "fibre_g": 5.8,
    "folate_ug": 23.0,
    "iron_mg": 2.68,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 1560.0,
    "protein_g": 5.06,
    "salt_g": 0.665,
    "sat_fat_g": 1.89,
    "sodium_mg": 266.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 102.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169384",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "oils-and-fats",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
