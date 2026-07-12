/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Puerto Rican seasoning without ham and tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 6.89,
    "energy_kcal": 127.0,
    "fat_g": 10.8,
    "fibre_g": 1.5,
    "folate_ug": 21.0,
    "iron_mg": 0.4,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 168.0,
    "protein_g": 1.02,
    "salt_g": 0.01,
    "sat_fat_g": 1.47,
    "sodium_mg": 4.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 49.1,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 28.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709755",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "meat-and-poultry",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
