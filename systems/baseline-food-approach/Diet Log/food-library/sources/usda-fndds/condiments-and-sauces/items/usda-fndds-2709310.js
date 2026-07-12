/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-serving-lettuce-1-cup-diced-pineapple-dressing",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709310",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "1-serving-lettuce-1-cup-diced-pineapple-dressing",
      "kind": "unit",
      "label": "1 serving (lettuce, 1 cup diced pineapple, dressing)"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pineapple salad with dressing",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 12.8,
    "energy_kcal": 105.0,
    "fat_g": 5.79,
    "fibre_g": 0.8,
    "folate_ug": 17.0,
    "iron_mg": 0.06,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 128.0,
    "protein_g": 0.5,
    "salt_g": 0.12,
    "sat_fat_g": 0.884,
    "sodium_mg": 48.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 52.7,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709310",
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
