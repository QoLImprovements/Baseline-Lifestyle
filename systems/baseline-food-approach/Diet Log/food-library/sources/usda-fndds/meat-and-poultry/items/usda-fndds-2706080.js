/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-boneless-wing",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-boneless-wing",
      "kind": "unit",
      "label": "1 boneless wing"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken \"wings\", boneless, with hot sauce, from other sources",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 20.0,
    "energy_kcal": 232.0,
    "fat_g": 11.8,
    "fibre_g": 1.5,
    "folate_ug": 25.0,
    "iron_mg": 0.9,
    "magnesium_mg": 25.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 157.0,
    "potassium_mg": 255.0,
    "protein_g": 11.4,
    "salt_g": 2.0675,
    "sat_fat_g": 2.49,
    "sodium_mg": 827.0,
    "sugar_g": 6.08,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706080",
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
