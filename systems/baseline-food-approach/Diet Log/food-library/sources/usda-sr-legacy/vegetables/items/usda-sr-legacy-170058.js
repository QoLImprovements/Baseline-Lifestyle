/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Turnips, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 5.06,
    "energy_kcal": 22.0,
    "fat_g": 0.08,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 0.18,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 177.0,
    "protein_g": 0.71,
    "salt_g": 0.04,
    "sat_fat_g": 0.008,
    "sodium_mg": 16.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170058",
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
