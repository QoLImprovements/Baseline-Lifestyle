/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "bottle-earth-s-best-4-2-fl-oz",
      "kind": "unit",
      "label": "bottle Earth's Best (4.2 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-beech-nut-stage-i-4-fl-oz",
      "kind": "unit",
      "label": "bottle Beech-Nut Stage I (4 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-nfs",
      "kind": "unit",
      "label": "bottle NFS"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-heinz-strained-4-fl-oz",
      "kind": "unit",
      "label": "bottle Heinz Strained (4 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-gerber-first-food-4-fl-oz",
      "kind": "unit",
      "label": "bottle Gerber First Food (4 fl oz)"
    }
  ],
  "name": "Babyfood, juice, pear",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 11.9,
    "energy_kcal": 179.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 130.0,
    "protein_g": 0.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 7.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.8,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167718",
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
