/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "matzo",
      "kind": "unit",
      "label": "matzo"
    }
  ],
  "name": "Crackers, matzo, egg and onion",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 77.1,
    "energy_kcal": 1640.0,
    "fat_g": 3.9,
    "fibre_g": 5.0,
    "folate_ug": 158.0,
    "iron_mg": 4.37,
    "magnesium_mg": 30.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 89.0,
    "potassium_mg": 83.0,
    "protein_g": 10.0,
    "salt_g": 0.7125,
    "sat_fat_g": 0.936,
    "sodium_mg": 285.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172812",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
