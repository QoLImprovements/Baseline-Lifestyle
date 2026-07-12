/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-beech-nut-stage-2-4-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-beech-nut-stage-2-4-fl-oz",
      "kind": "unit",
      "label": "bottle Beech-Nut Stage 2 (4 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-gerber-second-foods-4-fl-oz",
      "kind": "unit",
      "label": "bottle Gerber Second Foods (4 fl oz)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "bottle-earth-s-best-4-2-fl-oz",
      "kind": "unit",
      "label": "bottle Earth's Best (4.2 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-heinz-strained-4-fl-oz",
      "kind": "unit",
      "label": "bottle Heinz Strained (4 fl oz)"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-nfs",
      "kind": "unit",
      "label": "bottle NFS"
    }
  ],
  "name": "Babyfood, apple-banana juice",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 12.3,
    "energy_kcal": 51.0,
    "fat_g": 0.1,
    "fibre_g": 0.2,
    "folate_ug": 1.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 123.0,
    "protein_g": 0.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.018,
    "sodium_mg": 4.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.9,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171351",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
