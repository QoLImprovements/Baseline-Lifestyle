/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "arrowroot-biscuit-include-arrowroot-cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168014",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.9,
      "key": "arrowroot-biscuit-include-arrowroot-cookie",
      "kind": "unit",
      "label": "Arrowroot biscuit (include Arrowroot cookie)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "individual-box-2-oz",
      "kind": "unit",
      "label": "individual box (2 oz)"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, animal crackers (includes arrowroot, tea biscuits)",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 74.1,
    "energy_kcal": 1870.0,
    "fat_g": 13.8,
    "fibre_g": 1.1,
    "folate_ug": 103.0,
    "iron_mg": 2.75,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 100.0,
    "protein_g": 6.9,
    "salt_g": 0.8375,
    "sat_fat_g": 3.46,
    "sodium_mg": 335.0,
    "sugar_g": 23.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168014",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
