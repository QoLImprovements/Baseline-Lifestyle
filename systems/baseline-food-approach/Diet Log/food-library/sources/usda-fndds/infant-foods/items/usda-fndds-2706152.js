/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2706152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    }
  ],
  "name": "Baby Toddler turkey",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.4,
    "energy_kcal": 111.0,
    "fat_g": 6.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 12.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 117.0,
    "potassium_mg": 135.0,
    "protein_g": 11.5,
    "salt_g": 0.1225,
    "sat_fat_g": 1.64,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706152",
  "state": "Unspecified",
  "subcategory": "Baby food: meat and dinners",
  "tags": [
    "baby-food-meat-and-dinners",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
