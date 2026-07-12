/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168627",
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
    },
    {
      "gramsPerUnit": 81.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Beef, variety meats and by-products, liver, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.16,
    "energy_kcal": 734.0,
    "fat_g": 4.68,
    "fibre_g": 0.0,
    "folate_ug": 260.0,
    "iron_mg": 6.17,
    "magnesium_mg": 22.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 485.0,
    "potassium_mg": 351.0,
    "protein_g": 26.5,
    "salt_g": 0.1925,
    "sat_fat_g": 2.53,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7740.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168627",
  "state": "Fried",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
