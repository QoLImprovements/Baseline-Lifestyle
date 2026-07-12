/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-4-oz",
      "kind": "unit",
      "label": "jar, Gerber (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, chicken and rice",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 9.2,
    "energy_kcal": 215.0,
    "fat_g": 0.9,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 20.0,
    "potassium_mg": 60.0,
    "protein_g": 1.6,
    "salt_g": 0.0625,
    "sat_fat_g": 0.211,
    "sodium_mg": 25.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169054",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
