/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Cauliflower, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.75,
    "energy_kcal": 19.0,
    "fat_g": 0.22,
    "fibre_g": 2.7,
    "folate_ug": 41.0,
    "iron_mg": 0.41,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 139.0,
    "protein_g": 1.61,
    "salt_g": 0.045,
    "sat_fat_g": 0.034,
    "sodium_mg": 18.0,
    "sugar_g": 1.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 31.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170399",
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
