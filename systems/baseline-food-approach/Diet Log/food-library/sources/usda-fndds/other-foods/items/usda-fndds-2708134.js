/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-nfs",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2708134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    }
  ],
  "name": "Graham crackers (Teddy Grahams)",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 77.7,
    "energy_kcal": 430.0,
    "fat_g": 10.6,
    "fibre_g": 3.4,
    "folate_ug": 91.0,
    "iron_mg": 3.78,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 185.0,
    "potassium_mg": 170.0,
    "protein_g": 6.69,
    "salt_g": 1.29,
    "sat_fat_g": 1.63,
    "sodium_mg": 516.0,
    "sugar_g": 24.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708134",
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
