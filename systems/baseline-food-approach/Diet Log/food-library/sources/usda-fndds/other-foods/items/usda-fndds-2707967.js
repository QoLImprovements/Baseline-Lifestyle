/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-stick",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pocky",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 51.1,
    "energy_kcal": 447.0,
    "fat_g": 22.5,
    "fibre_g": 5.0,
    "folate_ug": 17.0,
    "iron_mg": 0.9,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 181.0,
    "protein_g": 10.0,
    "salt_g": 0.5325,
    "sat_fat_g": 12.6,
    "sodium_mg": 213.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.87,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707967",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
