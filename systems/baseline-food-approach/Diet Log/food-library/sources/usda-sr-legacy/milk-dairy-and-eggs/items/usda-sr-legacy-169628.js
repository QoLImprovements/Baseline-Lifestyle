/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-1-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "serving-1-5-oz",
      "kind": "unit",
      "label": "serving 1.5 oz"
    }
  ],
  "name": "Candies, HERSHEY, REESESTICKS crispy wafers, peanut butter, milk chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 55.4,
    "energy_kcal": 2180.0,
    "fat_g": 31.3,
    "fibre_g": 3.3,
    "folate_ug": 40.0,
    "iron_mg": 1.3,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 295.0,
    "protein_g": 9.53,
    "salt_g": 0.66,
    "sat_fat_g": 13.2,
    "sodium_mg": 264.0,
    "sugar_g": 40.3,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 2.77,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169628",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
