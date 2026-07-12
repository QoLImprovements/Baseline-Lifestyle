/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-link",
      "kind": "unit",
      "label": "1 link"
    }
  ],
  "name": "Breakfast link, pattie, or slice, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 8.09,
    "energy_kcal": 255.0,
    "fat_g": 18.2,
    "fibre_g": 2.8,
    "folate_ug": 26.0,
    "iron_mg": 3.72,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 225.0,
    "potassium_mg": 231.0,
    "protein_g": 20.3,
    "salt_g": 2.22,
    "sat_fat_g": 2.93,
    "sodium_mg": 888.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707467",
  "state": "Unspecified",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "meat-and-poultry",
    "soy-and-meat-alternative-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
