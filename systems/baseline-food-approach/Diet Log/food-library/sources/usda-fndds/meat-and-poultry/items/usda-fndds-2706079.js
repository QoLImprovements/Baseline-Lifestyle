/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-boneless-wing",
      "kind": "unit",
      "label": "1 boneless wing"
    }
  ],
  "name": "Chicken \"wings\", boneless, with hot sauce, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 20.0,
    "energy_kcal": 282.0,
    "fat_g": 16.9,
    "fibre_g": 0.9,
    "folate_ug": 13.0,
    "iron_mg": 0.89,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 211.0,
    "potassium_mg": 232.0,
    "protein_g": 12.4,
    "salt_g": 2.1925,
    "sat_fat_g": 3.33,
    "sodium_mg": 877.0,
    "sugar_g": 5.72,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706079",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
