/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, excluding citrus fruits, with salad dressing or mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 13.6,
    "energy_kcal": 247.0,
    "fat_g": 20.7,
    "fibre_g": 1.5,
    "folate_ug": 17.0,
    "iron_mg": 0.28,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 44.0,
    "potassium_mg": 181.0,
    "protein_g": 1.78,
    "salt_g": 0.3175,
    "sat_fat_g": 2.85,
    "sodium_mg": 127.0,
    "sugar_g": 9.93,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 16.9,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 34.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709296",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "condiments-and-sauces",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
