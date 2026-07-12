/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Burrito bowl, beef or pork, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 6.94,
    "energy_kcal": 161.0,
    "fat_g": 8.91,
    "fibre_g": 1.8,
    "folate_ug": 17.0,
    "iron_mg": 1.55,
    "magnesium_mg": 26.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 150.0,
    "potassium_mg": 269.0,
    "protein_g": 13.1,
    "salt_g": 0.86,
    "sat_fat_g": 3.85,
    "sodium_mg": 344.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708558",
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
