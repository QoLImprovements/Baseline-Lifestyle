/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-nfs",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, water",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 72.8,
    "energy_kcal": 384.0,
    "fat_g": 7.14,
    "fibre_g": 7.1,
    "folate_ug": 24.0,
    "iron_mg": 0.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 99.0,
    "protein_g": 7.14,
    "salt_g": 1.4275,
    "sat_fat_g": 0.0,
    "sodium_mg": 571.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708178",
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
