/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, peanut butter, commercially prepared, regular",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 58.2,
    "energy_kcal": 1980.0,
    "fat_g": 23.8,
    "fibre_g": 2.1,
    "folate_ug": 57.0,
    "iron_mg": 2.11,
    "magnesium_mg": 44.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 156.0,
    "potassium_mg": 202.0,
    "protein_g": 8.92,
    "salt_g": 1.1575,
    "sat_fat_g": 6.75,
    "sodium_mg": 463.0,
    "sugar_g": 28.6,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172727",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
