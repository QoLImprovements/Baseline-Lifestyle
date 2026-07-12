/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-muffin",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-muffin",
      "kind": "unit",
      "label": "1 muffin"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, English, wheat bran, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 48.2,
    "energy_kcal": 231.0,
    "fat_g": 1.82,
    "fibre_g": 4.6,
    "folate_ug": 58.0,
    "iron_mg": 2.76,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 234.0,
    "protein_g": 8.16,
    "salt_g": 0.8,
    "sat_fat_g": 0.268,
    "sodium_mg": 320.0,
    "sugar_g": 7.92,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707739",
  "state": "Unspecified",
  "subcategory": "Bagels and English muffins",
  "tags": [
    "bagels-and-english-muffins",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
