/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tray",
  "description": "Baby food: meat and dinners",
  "id": "usda-fndds-2710133",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-tray",
      "kind": "unit",
      "label": "1 tray"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Toddler meal, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 12.8,
    "energy_kcal": 85.0,
    "fat_g": 2.08,
    "fibre_g": 1.0,
    "folate_ug": 26.0,
    "iron_mg": 0.69,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 55.0,
    "potassium_mg": 99.0,
    "protein_g": 3.65,
    "salt_g": 0.4175,
    "sat_fat_g": 0.708,
    "sodium_mg": 167.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710133",
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
