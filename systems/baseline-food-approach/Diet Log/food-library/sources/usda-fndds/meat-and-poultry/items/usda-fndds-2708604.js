/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-fajita",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-fajita",
      "kind": "unit",
      "label": "1 fajita"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fajita, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 18.0,
    "energy_kcal": 206.0,
    "fat_g": 9.8,
    "fibre_g": 1.5,
    "folate_ug": 41.0,
    "iron_mg": 1.47,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 188.0,
    "protein_g": 11.3,
    "salt_g": 1.1275,
    "sat_fat_g": 2.14,
    "sodium_mg": 451.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 23.9,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708604",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
