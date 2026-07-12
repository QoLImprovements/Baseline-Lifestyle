/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-nfs",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, rice and nuts",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 77.4,
    "energy_kcal": 430.0,
    "fat_g": 8.85,
    "fibre_g": 0.8,
    "folate_ug": 24.0,
    "iron_mg": 0.29,
    "magnesium_mg": 164.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 368.0,
    "potassium_mg": 278.0,
    "protein_g": 10.8,
    "salt_g": 0.9,
    "sat_fat_g": 0.345,
    "sodium_mg": 360.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.03,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708164",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
