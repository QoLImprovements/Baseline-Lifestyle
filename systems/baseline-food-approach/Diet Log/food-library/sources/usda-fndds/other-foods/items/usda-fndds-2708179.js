/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    }
  ],
  "name": "Crackers, wonton",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 51.9,
    "energy_kcal": 521.0,
    "fat_g": 31.7,
    "fibre_g": 1.9,
    "folate_ug": 17.0,
    "iron_mg": 1.76,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 87.0,
    "potassium_mg": 89.0,
    "protein_g": 10.3,
    "salt_g": 0.945,
    "sat_fat_g": 4.93,
    "sodium_mg": 378.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.29,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708179",
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
