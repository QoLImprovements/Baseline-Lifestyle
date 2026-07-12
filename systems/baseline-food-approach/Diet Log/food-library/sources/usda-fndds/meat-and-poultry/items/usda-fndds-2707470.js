/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-sliced",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog, vegetarian",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.7,
    "energy_kcal": 233.0,
    "fat_g": 13.7,
    "fibre_g": 3.9,
    "folate_ug": 78.0,
    "iron_mg": 1.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 344.0,
    "potassium_mg": 98.0,
    "protein_g": 19.6,
    "salt_g": 1.1775,
    "sat_fat_g": 1.65,
    "sodium_mg": 471.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707470",
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
