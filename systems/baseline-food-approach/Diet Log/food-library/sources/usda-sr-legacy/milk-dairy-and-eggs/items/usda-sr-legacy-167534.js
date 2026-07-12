/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "4-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Cream puff, eclair, custard or cream filled, iced",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 37.4,
    "energy_kcal": 1400.0,
    "fat_g": 18.5,
    "fibre_g": 0.9,
    "folate_ug": 66.0,
    "iron_mg": 0.95,
    "magnesium_mg": 10.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 71.0,
    "potassium_mg": 68.0,
    "protein_g": 4.41,
    "salt_g": 0.6625,
    "sat_fat_g": 7.06,
    "sodium_mg": 265.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167534",
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
