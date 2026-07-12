/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Alfredo sauce with poultry and added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 2.15,
    "energy_kcal": 133.0,
    "fat_g": 10.8,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.28,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 89.0,
    "potassium_mg": 138.0,
    "protein_g": 6.83,
    "salt_g": 1.0325,
    "sat_fat_g": 5.67,
    "sodium_mg": 413.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705814",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
