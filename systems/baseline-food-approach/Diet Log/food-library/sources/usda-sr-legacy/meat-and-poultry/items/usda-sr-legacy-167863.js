/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, variety meats and by-products, liver, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 3.76,
    "energy_kcal": 690.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 163.0,
    "iron_mg": 17.9,
    "magnesium_mg": 14.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 241.0,
    "potassium_mg": 150.0,
    "protein_g": 26.0,
    "salt_g": 0.1225,
    "sat_fat_g": 1.41,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5400.0,
    "vitamin_c_mg": 23.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167863",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
