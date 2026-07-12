/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-enchilada-any-size",
      "kind": "unit",
      "label": "1 enchilada, any size"
    }
  ],
  "name": "Enchilada, beef",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 14.6,
    "energy_kcal": 191.0,
    "fat_g": 10.5,
    "fibre_g": 2.3,
    "folate_ug": 11.0,
    "iron_mg": 1.14,
    "magnesium_mg": 32.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 188.0,
    "potassium_mg": 192.0,
    "protein_g": 9.76,
    "salt_g": 1.145,
    "sat_fat_g": 3.93,
    "sodium_mg": 458.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708566",
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
