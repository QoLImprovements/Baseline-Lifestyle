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
  "id": "usda-fndds-2706722",
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
  "name": "Chow mein or chop suey, NS as to type of meat, with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 11.2,
    "energy_kcal": 131.0,
    "fat_g": 5.43,
    "fibre_g": 1.5,
    "folate_ug": 42.0,
    "iron_mg": 1.25,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 174.0,
    "protein_g": 9.91,
    "salt_g": 1.02,
    "sat_fat_g": 1.46,
    "sodium_mg": 408.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 11.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706722",
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
