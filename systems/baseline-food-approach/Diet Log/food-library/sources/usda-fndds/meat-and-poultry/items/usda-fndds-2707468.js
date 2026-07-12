/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken, meatless, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 3.64,
    "energy_kcal": 224.0,
    "fat_g": 12.7,
    "fibre_g": 3.6,
    "folate_ug": 76.0,
    "iron_mg": 3.27,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 335.0,
    "potassium_mg": 54.0,
    "protein_g": 23.6,
    "salt_g": 1.7725,
    "sat_fat_g": 1.53,
    "sodium_mg": 709.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707468",
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
