/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2706724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chow mein or chop suey, various types of meat, with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 11.2,
    "energy_kcal": 134.0,
    "fat_g": 5.57,
    "fibre_g": 1.5,
    "folate_ug": 40.0,
    "iron_mg": 1.49,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 103.0,
    "potassium_mg": 198.0,
    "protein_g": 10.4,
    "salt_g": 0.885,
    "sat_fat_g": 1.65,
    "sodium_mg": 354.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706724",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
