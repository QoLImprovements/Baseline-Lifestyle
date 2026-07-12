/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-sleeve",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-sleeve",
      "kind": "unit",
      "label": "1 sleeve"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup-bite-size",
      "kind": "unit",
      "label": "1 cup, bite size"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Crackers, butter, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 61.3,
    "energy_kcal": 510.0,
    "fat_g": 26.4,
    "fibre_g": 2.3,
    "folate_ug": 92.0,
    "iron_mg": 4.03,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 248.0,
    "potassium_mg": 118.0,
    "protein_g": 6.64,
    "salt_g": 1.815,
    "sat_fat_g": 5.56,
    "sodium_mg": 726.0,
    "sugar_g": 8.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.03,
    "vitamin_k_ug": 69.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708147",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
