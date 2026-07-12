/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving-3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "serving-3-cookies",
      "kind": "unit",
      "label": "serving 3 cookies"
    }
  ],
  "name": "Cookies, peanut butter, commercially prepared, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 50.5,
    "energy_kcal": 523.0,
    "fat_g": 31.0,
    "fibre_g": 3.4,
    "folate_ug": 83.0,
    "iron_mg": 2.48,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 202.0,
    "protein_g": 10.3,
    "salt_g": 1.12,
    "sat_fat_g": 8.62,
    "sodium_mg": 448.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171843",
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
